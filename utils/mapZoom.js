import {cameraConfig} from "../config";

export const zoomInPoint = (mapRef,coordinates) => {
    const camera = {
        center: {
            longitude: coordinates[0],
            latitude: coordinates[1]
        },
        zoom: cameraConfig.zoom,
        altitude: cameraConfig.altitude
    };
    mapRef.current.animateCamera(camera,cameraConfig.animateDuration);
};
