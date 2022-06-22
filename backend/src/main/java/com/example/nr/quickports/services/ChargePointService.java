package com.example.nr.quickports.services;


import com.example.nr.quickports.entities.chargedevice.ChargeDevice;
import com.example.nr.quickports.repositories.ChargeDeviceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ChargePointService {

    private final ChargeDeviceRepository chargeDeviceRepository;

    @Autowired
    public ChargePointService(ChargeDeviceRepository chargeDeviceRepository) {
        this.chargeDeviceRepository = chargeDeviceRepository;
    }

    public List<ChargeDevice> getAllChargeDevices() {
        return chargeDeviceRepository.findAll();
    }

    public ChargeDevice addChargeDevice(ChargeDevice chargeDevice) {

        chargeDeviceRepository.save(chargeDevice);

        return chargeDevice;
    }

    public ChargeDevice findByDeviceId( String deviceId ) {
        
        return chargeDeviceRepository.findChargeDeviceByChargeDeviceId(deviceId);
        
    }



}
