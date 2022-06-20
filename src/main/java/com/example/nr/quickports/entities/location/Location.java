package com.example.nr.quickports.entities.location;

import com.example.nr.quickports.entities.location.Address;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Location {

    @Id
    @SequenceGenerator(
            name = "Location",
            sequenceName = "location_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "location_sequence"
    )
    @JsonIgnore
    private Long id;

    private String latitude;

    private String longitude;

    @OneToOne(
            cascade = CascadeType.ALL
    )
    private Address address;

    public Location(String latitude, String longitude, Address address) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.address = address;
    }

    public Location() {
    }

    public Long getId() {
        return id;
    }

    public String getLatitude() {
        return latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public Address getAddress() {
        return address;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public void setAddress(Address address) {
        this.address = address;
    }
}
