package com.example.nr.quickports.entities.chargedevice;

import com.example.nr.quickports.entities.connector.Connector;
import com.example.nr.quickports.entities.location.Location;
import com.example.nr.quickports.entities.modification.ModificationDates;
import org.springframework.lang.NonNull;

import javax.persistence.*;


@Entity(name = "chargeDevice")
public class ChargeDevice {

    @Id
    @SequenceGenerator(
            name = "chargeDeviceId",
            sequenceName = "charge_device_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "charge_device_sequence"
    )
    private Long id;


    private String chargeDeviceId;

    private String chargeDeviceName;

    @NonNull
    @OneToOne(
            cascade = CascadeType.ALL
    )
    private Location location;
    @NonNull
    @OneToOne(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name ="connector_id",
            referencedColumnName = "id",
            foreignKey = @ForeignKey(
                    name = "connector_id_fk"
            )
    )

    private Connector connector;

    @OneToOne(
            cascade = CascadeType.ALL
    )
    @NonNull
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
