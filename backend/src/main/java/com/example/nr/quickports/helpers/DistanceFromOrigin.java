package com.example.nr.quickports.helpers;

import com.example.nr.quickports.entities.location.Location;
import com.javadocmd.simplelatlng.LatLng;
import com.javadocmd.simplelatlng.LatLngTool;
import com.javadocmd.simplelatlng.util.LengthUnit;

//ClassName must be Changed
public class DistanceFromOrigin {

    /**Return true if device distance is equal to or less than the distance from the origin device
     *
     * @param userProvidedCoordinate Origin location
     * @param chargeDevice Location being checked
     * @param distanceFromOrigin maximum distance from origin
     * @return
     */
    public static boolean isDeviceInRange(LatLng userProvidedCoordinate, Location chargeDevice, double distanceFromOrigin){

        LatLng destination = fromString(chargeDevice.getLatitude() , chargeDevice.getLongitude());

        return LatLngTool.distance(userProvidedCoordinate, destination, LengthUnit.MILE) <= distanceFromOrigin;
    }


    //Creates a LatLng object
    private static LatLng fromString(String latitude , String longitude){

        return new LatLng(
                returnStringAsDouble(latitude
                ) ,         returnStringAsDouble(longitude));

    }


    //Returns Double from a string
    private static double returnStringAsDouble(String string){return Double.parseDouble(string);}


}
