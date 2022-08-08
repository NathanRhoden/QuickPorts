package com.example.nr.quickports.services;


import com.example.nr.quickports.entities.chargedevice.ChargeDevice;
import com.example.nr.quickports.exceptions.DeviceNotFoundException;
import com.example.nr.quickports.helpers.DistanceFromOrigin;
import com.example.nr.quickports.repositories.ChargeDeviceRepository;
import com.javadocmd.simplelatlng.LatLng;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class ChargePointService implements ChargeDeviceServiceInterface {

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

    //FINDS DEVICE BY DEVICE ID STRING
    public ChargeDevice findByDeviceId(String deviceId){

        return chargeDeviceRepository.findChargeDeviceByChargeDeviceId(deviceId)
                .orElseThrow(
                        () -> new DeviceNotFoundException(
                                "No device found with id " + deviceId, new DeviceNotFoundException("Id does not exist "))
                );

    }

    //FINDS DEVICE BY INDEX ID
    public ChargeDevice findById(Long id){

        return chargeDeviceRepository.findById(id)
                .orElseThrow(
                        () -> new DeviceNotFoundException(
                                "No device found with id " + id , new DeviceNotFoundException("Id does not exist "))

                );

    }


    @Override
    public ChargeDevice deleteChargeDeviceById(Long id) {
        return null;
    }

    @Override
    public List<ChargeDevice> findChargeDevicesByDistance(LatLng coordinateLocation, double distance) {

        return chargeDeviceRepository.findAll()
                .stream()
                .filter(chargeDevice -> DistanceFromOrigin.isDeviceInRange(coordinateLocation , chargeDevice.getLocation() , distance ))
                .collect(Collectors.toList());
    }




}
