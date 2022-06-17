package com.example.nr.quickports.entities.location;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Address {

    @Id
    @SequenceGenerator(
            name = "Address",
            sequenceName = "address_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "address_sequence"
    )
    @JsonIgnore
    private Long id;

    private String buildingNumber;

    private String streetName;

    private String postCode;

    private String county;

    private String country;

    public Address(String buildingNumber, String streetName, String postCode, String county, String country) {
        this.buildingNumber = buildingNumber;
        this.streetName = streetName;
        this.postCode = postCode;
        this.county = county;
        this.country = country;
    }

    public Address() {
    }

    public Long getId() {
        return id;
    }

    public String getBuildingNumber() {
        return buildingNumber;
    }

    public String getStreetName() {
        return streetName;
    }

    public String getPostCode() {
        return postCode;
    }

    public String getCounty() {
        return county;
    }

    public String getCountry() {
        return country;
    }

    @Override
    public String toString() {
        return "Address{" +
                "id=" + id +
                ", buildingNumber='" + buildingNumber + '\'' +
                ", streetName='" + streetName + '\'' +
                ", postCode='" + postCode + '\'' +
                ", county='" + county + '\'' +
                ", country='" + country + '\'' +
                '}';
    }
}
