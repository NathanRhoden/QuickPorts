package com.example.nr.quickports.repositories;

import com.example.nr.quickports.entities.chargedevice.ChargeDevice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChargeDeviceRepository extends JpaRepository<ChargeDevice , Long> {


}