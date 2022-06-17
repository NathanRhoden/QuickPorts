package com.example.nr.quickports.entities.connector;

import com.example.nr.quickports.entities.chargedevice.ChargeDevice;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Connector {

    @Id
    @SequenceGenerator(
            name = "Connector",
            sequenceName = "connector_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "connector_sequence"
    )
    @JsonIgnore
    private Long id;
    private String ConnectorType;
    private String ratedOutputKW;
    private String ratedOutputVoltage;
    private String ratedOutputCurrent;
    private String chargeMethod;


    public Connector(String connectorType, String ratedOutputKW, String ratedOutputVoltage, String ratedOutputCurrent, String chargeMethod) {
        ConnectorType = connectorType;
        this.ratedOutputKW = ratedOutputKW;
        this.ratedOutputVoltage = ratedOutputVoltage;
        this.ratedOutputCurrent = ratedOutputCurrent;
        this.chargeMethod = chargeMethod;
    }

    public Connector() {
    }

    public Long getId() {
        return id;
    }

    public String getConnectorType() {
        return ConnectorType;
    }

    public String getRatedOutputKW() {
        return ratedOutputKW;
    }

    public String getRatedOutputVoltage() {
        return ratedOutputVoltage;
    }

    public String getRatedOutputCurrent() {
        return ratedOutputCurrent;
    }

    public String getChargeMethod() {
        return chargeMethod;
    }


    @Override
    public String toString() {
        return "Connector{" +
                "id=" + id +
                ", ConnectorType='" + ConnectorType + '\'' +
                ", ratedOutputKW='" + ratedOutputKW + '\'' +
                ", ratedOutputVoltage='" + ratedOutputVoltage + '\'' +
                ", ratedOutputCurrent='" + ratedOutputCurrent + '\'' +
                ", chargeMethod='" + chargeMethod + '\'' +
                '}';
    }
}
