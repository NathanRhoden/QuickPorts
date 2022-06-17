package com.example.nr.quickports.entities.chargedevice;

import com.example.nr.quickports.dto.ChargeDeviceDTO;
import com.example.nr.quickports.entities.connector.Connector;
import com.example.nr.quickports.entities.location.Location;
import com.example.nr.quickports.entities.modification.ModificationDates;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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

    @OneToOne(
            cascade = CascadeType.ALL
    )
    private ModificationDates modificationDates;


    public ChargeDevice(String chargeDeviceId, String chargeDeviceName, Location location, Connector connector, ModificationDates modificationDates) {
        this.chargeDeviceId = chargeDeviceId;
        this.chargeDeviceName = chargeDeviceName;
        this.location = location;
        this.connector = connector;
        this.modificationDates = modificationDates;
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

    public ModificationDates getModificationDates() {
        return modificationDates;
    }

    public Connector getConnector() {
        return connector;
    }

    public static ChargeDevice from(ChargeDeviceDTO chargeDeviceDTO) {

        ChargeDevice chargeDevice = new ChargeDevice();

        chargeDevice.setChargeDeviceId(chargeDevice.getChargeDeviceId());
        chargeDevice.setChargeDeviceName(chargeDevice.getChargeDeviceName());
        chargeDevice.setConnector(chargeDevice.getConnector());
        chargeDevice.setLocation(chargeDevice.getLocation());
        chargeDevice.setModificationDates(chargeDevice.getModificationDates());

        return chargeDevice;

    }

    public void setChargeDeviceId(String chargeDeviceId) {
        this.chargeDeviceId = chargeDeviceId;
    }

    public void setChargeDeviceName(String chargeDeviceName) {
        this.chargeDeviceName = chargeDeviceName;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public void setConnector(Connector connector) {
        this.connector = connector;
    }

    public void setModificationDates(ModificationDates modificationDates) {
        this.modificationDates = modificationDates;
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
