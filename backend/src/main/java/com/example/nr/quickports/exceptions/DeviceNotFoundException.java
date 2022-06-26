package com.example.nr.quickports.exceptions;

public class DeviceNotFoundException extends RuntimeException{

    public DeviceNotFoundException(String message) {
        super(message);
    }

    public DeviceNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
