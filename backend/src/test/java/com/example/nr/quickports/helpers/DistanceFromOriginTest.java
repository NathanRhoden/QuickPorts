package com.example.nr.quickports.helpers;

import com.example.nr.quickports.entities.location.Address;
import com.example.nr.quickports.entities.location.Location;
import com.javadocmd.simplelatlng.LatLng;
import com.javadocmd.simplelatlng.LatLngTool;
import com.javadocmd.simplelatlng.util.LengthUnit;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class DistanceFromOriginTest {

    private final LatLng userProvidedCoordinate = new LatLng(51.543784 , -0.244061);
    private final LatLng mockChargeDeviceCoordinates = new LatLng(51.530182, -0.167535);

    Address address = new Address("107",
            "Croydon Road",

            "SE20 7TF",
            "Greater London",
            "gb"
    );

    private final Location mockChargeDevice = new Location("51.530182", "-0.167535", address);

    //3.420482743315171 mile range between origin and device
    double distanceInMiles = LatLngTool.distance(userProvidedCoordinate, mockChargeDeviceCoordinates, LengthUnit.MILE);


    @Test
    @DisplayName("Device is in range")
    void deviceInRangeTest() {

        assertTrue(DistanceFromOrigin.isDeviceInRange(userProvidedCoordinate , mockChargeDevice, 3.5));

    }

    @Test
    @DisplayName("Device is in out of range")
    void deviceOutOfRangeTest() {

        assertFalse(DistanceFromOrigin.isDeviceInRange(userProvidedCoordinate, mockChargeDevice, 2));

    }

    @Test
    @DisplayName("Device is in range and distance is equal to user input distance")
    void deviceDistanceIsEqual() {

        assertTrue(DistanceFromOrigin.isDeviceInRange(userProvidedCoordinate , mockChargeDevice, 3.420482743315171));

    }


}