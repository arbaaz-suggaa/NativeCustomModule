const { withDangerousMod, withAndroidManifest, withInfoPlist, withXcodeProject } = require('@expo/config-plugins');
const fs = require('fs-extra');
const path = require('path');

// Function to copy the new icon files into the appropriate directories
async function setCustomIcons(config, iconPath) {
    // Android: Copy icon to the appropriate directory
    await fs.copy(iconPath, path.join(config.modRequest.platformProjectRoot, 'app/src/main/res/mipmap-mdpi/ic_launcher.png'));
    // You should repeat the above line for different resolutions: hdpi, xhdpi, xxhdpi, xxxhdpi

    // iOS: Modify the Xcode project to use the new icon
    const { projectRoot, projectName } = config.modRequest;
    const iosIconPath = path.join(projectRoot, 'ios', projectName, 'Assets.xcassets', 'AppIcon.appiconset');
    // Copy the icon file to all required sizes in the AppIcon.appiconset directory
    const sizes = ['180', '60', '120', '76', '152', '167', '1024'];
    sizes.forEach(size => {
        const filename = `icon-${size}.png`;
        fs.copySync(iconPath, path.join(iosIconPath, filename));
    });

    return config;
}

// The main config plugin function
const withCustomIcon = (config, { iconPath }) => {
    return withDangerousMod(config, [
        'ios',
        async (config) => {
            await setCustomIcons(config, iconPath);
            return config;
        },
        'android',
        async (config) => {
            await setCustomIcons(config, iconPath);
            return config;
        }
    ]);
};

module.exports = withCustomIcon;
