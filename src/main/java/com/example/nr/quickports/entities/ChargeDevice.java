package com.example.nr.quickports.entities;

import com.example.nr.quickports.entities.connector.Connector;
import com.example.nr.quickports.entities.location.Location;
import com.example.nr.quickports.entities.modification.ModificationDates;

import javax.persistence.*;


@Entity
public class ChargeDevice {

    @Id
    private String chargeDeviceId;

    private String chargeDeviceName;

    @OneToOne(
            cascade = CascadeType.ALL
    )
    private Location location;

    @OneToOne(
            cascade = CascadeType.ALL
    )
    private Connector connector;


    public ChargeDevice(String chargeDeviceId, String chargeDeviceName, Location location, Connector connector) {
        this.chargeDeviceId = chargeDeviceId;
        this.chargeDeviceName = chargeDeviceName;
        this.location = location;
        this.connector = connector;
    }


    public ChargeDevice() {
    }

    public String getChargeDeviceId() {
        return chargeDeviceId;
    }

    public String getChargeDeviceName() {
        return chargeDeviceName;
    }

    public Location getLocation() {
        return location;
    }

    public Connector getConnector() {
        return connector;
    }

    @Override
    public String toString() {
        return "ChargeDevice{" +
                "chargeDeviceId=" + chargeDeviceId +
                ", chargeDeviceName='" + chargeDeviceName + '\'' +
                ", location=" + location +
                '}';
    }
}
