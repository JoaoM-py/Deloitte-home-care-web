interface Device {
    tag: string;
    imei: string;
    timestamp: Date;
    value?: string;
    errorCode?: string;
}

export default Device;