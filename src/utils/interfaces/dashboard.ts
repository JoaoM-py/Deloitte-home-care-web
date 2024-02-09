import Device from "./device";

interface Dashboard extends Device {
    allActiveDevices: Device[];
    WarningDevices: Device[];
    CriticalDevices: Device[];
    OnDevices: Device[];
    OffDevices: Device[];
    actions: string
}

export default Dashboard;