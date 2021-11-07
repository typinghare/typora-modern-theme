/**
 * This script aims at automatically install the current version of [typora-modern-theme]
 * @author ShotgunThinker
 * @email shotgun.thinker@gmail.com
 */

const {execSync} = require('child_process');
const fs = require('fs')
const path = require('path')

function log(content, role = 'installer') {
    console.log(`${role} >> ${content}`)
}

function exec(command) {
    log(`Executing command: "${command}"`)
    process.stdout.write('git >> ')
    let buf = execSync(command)
    process.stdout.write(buf)
}

// use git to update to the newest version
exec('git pull --ff-only');

let theme_dir = path.join(__dirname, '..', 'theme')
let dest_dir = process.argv[2] || path.join(__dirname, '..', '..')

// copy theme files from '../theme' to '../..'
fs.readdirSync(theme_dir).forEach(file => {
    let filepath = path.join(theme_dir, file)
    if (fs.lstatSync(filepath).isFile()) {
        fs.writeFileSync(path.join(dest_dir, file), fs.readFileSync(filepath))
    }
})
log('Copying theme files is done.')

let modern_dir = path.join(theme_dir, 'modern')
let dest_modern_dir = path.join(dest_dir, 'modern')

// make 'modern' directory if not exists
if (!fs.existsSync(dest_modern_dir) || !fs.lstatSync(dest_modern_dir).isDirectory()) {
    // make dir
    fs.mkdir(dest_modern_dir, err => {
        if (err) {
            console.log(err)
            return false
        }
        log('Created new folder: `' + dest_modern_dir + '`')
    })
} else {
    log('Folder exists: `' + dest_modern_dir + '`')
}

// copy component files
fs.readdirSync(modern_dir).forEach(file => {
    let filepath = path.join(modern_dir, file)
    if (fs.lstatSync(filepath).isFile()) {
        fs.writeFileSync(path.join(dest_modern_dir, file), fs.readFileSync(filepath))
    }
})
log('Copying component files is done.')