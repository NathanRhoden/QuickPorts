package com.example.nr.quickports.controllers;

import com.example.nr.quickports.dto.ChargeDeviceDTO;
import com.example.nr.quickports.entities.chargedevice.ChargeDevice;
import com.example.nr.quickports.services.ChargePointService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(
        path = "/api/v1/points"
)
public class ChargePointController {

    private final ChargePointService chargePointService;

    public ChargePointController(ChargePointService chargePointService) {
        this.chargePointService = chargePointService;
    }


    @GetMapping(path = "/all")
    public ResponseEntity<List<ChargeDeviceDTO>> getAllChargePoints() {

        List<ChargeDevice> chargeDeviceList = chargePointService.getAllChargeDevices();

        List<ChargeDeviceDTO> chargeDeviceDTOList = chargeDeviceList.stream()
                .map(ChargeDeviceDTO::from)
                .collect(Collectors.toList());

        return new ResponseEntity<>(chargeDeviceDTOList , HttpStatus.OK);

    }



}
