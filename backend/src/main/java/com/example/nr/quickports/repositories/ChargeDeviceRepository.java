package com.example.nr.quickports.repositories;

import com.example.nr.quickports.entities.chargedevice.ChargeDevice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChargeDeviceRepository extends JpaRepository<ChargeDevice , Long> {

    ChargeDevice findChargeDeviceByChargeDeviceId (String deviceId);

}
