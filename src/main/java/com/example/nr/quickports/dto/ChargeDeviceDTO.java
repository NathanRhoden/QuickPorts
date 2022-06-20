package com.example.nr.quickports.dto;


import com.example.nr.quickports.entities.chargedevice.ChargeDevice;

public class ChargeDeviceDTO {


    private ChargeDevice chargeDevice;


    public ChargeDeviceDTO(ChargeDevice chargeDevice) {
        this.chargeDevice = chargeDevice;
    }

    public ChargeDeviceDTO() {

    }

    public static ChargeDeviceDTO from(ChargeDevice chargeDevice) {

        ChargeDeviceDTO chargeDeviceDTO = new ChargeDeviceDTO();


        chargeDeviceDTO.setChargeDevice(chargeDevice);

        return chargeDeviceDTO;

    }

    public static ChargeDevice toEntity(ChargeDeviceDTO chargeDeviceDTO) {

        ChargeDevice chargeDevice = new ChargeDevice();

        //CHARGE DEVICE OBJECT
        chargeDevice.setChargeDeviceId(chargeDeviceDTO.getChargeDevice().getChargeDeviceId());
        chargeDevice.setChargeDeviceName(chargeDeviceDTO.getChargeDevice().getChargeDeviceName());

        //LOCATION OBJECT
        chargeDevice.setLocation(chargeDeviceDTO.getChargeDevice().getLocation());

        //CONNECTOR OBJECT
        chargeDevice.setConnector(chargeDeviceDTO.getChargeDevice().getConnector());

        //MODIFICATION DATE OBJECT
        chargeDevice.setModificationDates(chargeDeviceDTO.getChargeDevice().getModificationDates());


        return chargeDevice;
    }


    public ChargeDevice getChargeDevice() {
        return chargeDevice;
    }

    public void setChargeDevice(ChargeDevice chargeDevice) {
        this.chargeDevice = chargeDevice;
    }


}
