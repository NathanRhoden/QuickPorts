package com.example.nr.quickports.entities.modification;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

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

    private String dateCreated;

    private String  dateUpdated;

    public ModificationDates(String dateCreated, String dateUpdated) {
        this.dateCreated = dateCreated;
        this.dateUpdated = dateUpdated;

    }

    public ModificationDates() {
    }

    @JsonIgnore
    public Long getModificationId() {
        return ModificationId;
    }

    public String getDateCreated() {
        return dateCreated;
    }

    public String getDateUpdated() {
        return dateUpdated;
    }

    @Override
    public String toString() {
        return "ModificationDates{" +
                "id=" + ModificationId +
                ", dateCreated=" + dateCreated +
                ", dateUpdated=" + dateUpdated +
                '}';
    }


}
