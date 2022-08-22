package com.example.nr.quickports.controllers;

import com.example.nr.quickports.dto.ChargeDeviceDTO;
import com.example.nr.quickports.entities.chargedevice.ChargeDevice;
import com.example.nr.quickports.exceptions.DeviceException;
import com.example.nr.quickports.exceptions.DeviceNotFoundException;
import com.example.nr.quickports.services.ChargePointService;
import com.javadocmd.simplelatlng.LatLng;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(path = "/api/v1/points")
public class ChargePointController {

    private final ChargePointService chargePointService;

    public ChargePointController(ChargePointService chargePointService) {
        this.chargePointService = chargePointService;
    }

    // RETURNS A LIST OF ALL CHARGE DEVICES
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/all")
    public ResponseEntity<List<ChargeDeviceDTO>> getAllChargePoints() {

        List<ChargeDevice> chargeDeviceList = chargePointService.getAllChargeDevices();

        List<ChargeDeviceDTO> chargeDeviceDTOList = chargeDeviceList.stream()
                .map(ChargeDeviceDTO::from)
                .collect(Collectors.toList());

        return new ResponseEntity<>(chargeDeviceDTOList, HttpStatus.OK);

    }

    // SAVES DEVICE TO DATABASE
    @PostMapping
    public ResponseEntity<ChargeDevice> saveChargeDevice(@RequestBody ChargeDeviceDTO chargeDeviceDTO) {

        ChargeDevice chargeDevice = ChargeDeviceDTO.toEntity(chargeDeviceDTO);

        chargePointService.addChargeDevice(chargeDevice);

        return new ResponseEntity<>(chargeDevice, HttpStatus.ACCEPTED);

    }

    // SEARCHES FOR DEVICES BY STRING ID
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/device")
    @ResponseBody
    public ResponseEntity<ChargeDevice> getChargeDeviceByChargeDeviceId(@RequestParam String id) {

        ChargeDevice chargeDevice = chargePointService.findByDeviceId(id);

        return new ResponseEntity<>(chargeDevice, HttpStatus.OK);
    }

    // SEARCHES FOR DEVICES BY LONG ID
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "{id}")
    @ResponseBody
    public ResponseEntity<ChargeDevice> getDevicebyId(@PathVariable("id") Long id) {

        ChargeDevice chargeDevice = chargePointService.findById(id);

        return new ResponseEntity<>(chargeDevice, HttpStatus.OK);

    }

    // TEST DISTANCE
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/distance")
    @ResponseBody
    public ResponseEntity<List<ChargeDevice>> getDevicebyDistance(@RequestParam double d,
            @RequestParam double latitude,
            @RequestParam double longitude) {

        LatLng userSearchedCoordinate = new LatLng(latitude, longitude);

        List<ChargeDevice> chargeDeviceList = chargePointService.findChargeDevicesByDistance(userSearchedCoordinate, d);

        return new ResponseEntity<>(chargeDeviceList, HttpStatus.OK);

    }

}
