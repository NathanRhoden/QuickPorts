package com.example.nr.quickports.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.time.ZonedDateTime;

@ControllerAdvice
public class RequestExceptionHandler {

    @ExceptionHandler(value = DeviceNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<Object>  handleNotFoundException(
            DeviceNotFoundException e
    ){
        DeviceException deviceException = new DeviceException(
                e.getMessage(),
                e.getCause(),
                HttpStatus.NOT_FOUND,
                ZonedDateTime.now()
        );

        return new ResponseEntity<>(
                deviceException , HttpStatus.NOT_FOUND
        );
    }


}
