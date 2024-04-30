import React, { useEffect } from 'react';
import { View, Text, StyleSheet, PermissionsAndroid, Alert } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

const Downloader = ({ URL }) => {
    useEffect(() => {
        if (URL) {
            requestStoragePermission();
        }
    }, [URL]);

    const requestStoragePermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'Photo App Storage Permission',
                    message:
                        'Photo App needs access to your storage ' +
                        'so you can download files.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                downloadFile();
            } else {
                console.log('Storage permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const downloadFile = () => {
        const { config, fs } = RNFetchBlob;
        const date = new Date();
        const fileDir = fs.dirs.DownloadDir;
        config({
            fileCache: true,
            addAndroidDownloads: {
                useDownloadManager: true,
                notification: true,
                path: fileDir + "/download_" + Math.floor(date.getDate() + date.getSeconds() / 2) + '.jpg',
                description: 'File Download',
            }
        })
            .fetch('GET', URL, {})
            .then(res => {
                console.log('The file saved to ', res.path());
                alert("File Downloaded Successfully");
            })
            .catch(err => {
                console.error(err);
                alert("Error downloading file. Please try again.");
            });
    };

    return null;
};



export default Downloader;
