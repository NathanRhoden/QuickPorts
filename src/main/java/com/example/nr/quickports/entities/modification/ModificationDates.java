package com.example.nr.quickports.entities.modification;

import com.example.nr.quickports.entities.ChargeDevice;

import javax.persistence.*;
import java.util.Date;

@Entity
public class ModificationDates {

    @Id
    @SequenceGenerator(
            name = "ModificationDates",
            sequenceName = "dates_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "dates_sequence"
    )
    private Long ModificationId;

    private Date dateCreated;

    private Date dateUpdated;

    @OneToOne(
            cascade = CascadeType.ALL
    )
    private ChargeDevice chargeDevice;


    public ModificationDates(Date dateCreated, Date dateUpdated, ChargeDevice chargeDeviceId) {
        this.dateCreated = dateCreated;
        this.dateUpdated = dateUpdated;
        this.chargeDevice = chargeDeviceId;
    }

    public ModificationDates() {
    }

    public Long getModificationId() {
        return ModificationId;
    }

    public Date getDateCreated() {
        return dateCreated;
    }

    public Date getDateUpdated() {
        return dateUpdated;
    }

    public ChargeDevice getChargeDevice() {
        return chargeDevice;
    }

    @Override
    public String toString() {
        return "ModificationDates{" +
                "id=" + ModificationId +
                ", dateCreated=" + dateCreated +
                ", dateUpdated=" + dateUpdated +
                ", chargeDeviceId=" + chargeDevice +
                '}';
    }
}
