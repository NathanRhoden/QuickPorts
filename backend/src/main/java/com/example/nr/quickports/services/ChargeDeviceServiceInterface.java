package com.example.nr.quickports.services;

import com.example.nr.quickports.entities.chargedevice.ChargeDevice;
import com.javadocmd.simplelatlng.LatLng;

import java.util.List;

public interface ChargeDeviceServiceInterface {

    ChargeDevice deleteChargeDeviceById(Long id);

    List<ChargeDevice> findChargeDevicesByDistance(LatLng coordinateLocation , Long Distance);



}
