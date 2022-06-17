package com.example.nr.quickports.dto;


import com.example.nr.quickports.entities.chargedevice.ChargeDevice;

public class ChargeDeviceDTO {

    private ChargeDevice chargeDevice;


    public ChargeDeviceDTO(ChargeDevice chargeDevice) {
        this.chargeDevice = chargeDevice;
    }

    public ChargeDeviceDTO() {
    }


    public void setChargeDevice(ChargeDevice chargeDevice) {
        this.chargeDevice = chargeDevice;
    }

    public static ChargeDeviceDTO from(ChargeDevice chargeDevice) {
        ChargeDeviceDTO chargeDeviceDTO = new ChargeDeviceDTO();

        chargeDeviceDTO.setChargeDevice(chargeDevice);

        return chargeDeviceDTO;
    }


    public ChargeDevice getChargeDevice() {
        return chargeDevice;
    }
}
