package com.example.nr.quickports;

import com.example.nr.quickports.entities.ChargeDevice;
import com.example.nr.quickports.entities.location.Address;
import com.example.nr.quickports.entities.location.Location;
import com.example.nr.quickports.repositories.ChargeDeviceRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class QuickportsApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuickportsApplication.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner(ChargeDeviceRepository chargeDeviceRepository){
		return args -> {
			Address address = new Address("107",
					"Croydon Road" ,
					"SE20 7TF",
					"Greater London" ,
					"gb"
					);

			Location location = new Location("51.411173" ,"-0.055369", address );

			ChargeDevice chargeDevice = new ChargeDevice(
					"fa6c94460e902005a0b660266190c8ba",
					"Ancaster Nissan Dealership",
					location

			);

			chargeDeviceRepository.save(chargeDevice);

		};
	}
}
