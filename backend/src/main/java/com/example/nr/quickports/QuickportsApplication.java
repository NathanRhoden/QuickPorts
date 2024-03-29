package com.example.nr.quickports;

import com.example.nr.quickports.entities.chargedevice.ChargeDevice;
import com.example.nr.quickports.entities.connector.Connector;
import com.example.nr.quickports.entities.location.Address;
import com.example.nr.quickports.entities.location.Location;
import com.example.nr.quickports.entities.modification.ModificationDates;
import com.example.nr.quickports.repositories.ChargeDeviceRepository;
import com.example.nr.quickports.services.ChargePointService;
import com.javadocmd.simplelatlng.Geohasher;
import com.javadocmd.simplelatlng.LatLng;
import com.javadocmd.simplelatlng.LatLngTool;
import com.javadocmd.simplelatlng.util.LengthUnit;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class QuickportsApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuickportsApplication.class, args);
	}


	CommandLineRunner commandLineRunner(ChargeDeviceRepository chargeDeviceRepository){
		return args -> {
			Address address = new Address("107",
					"Croydon Road",
					"SE20 7TF",
					"Greater London",
					"gb"
			);

			Location location = new Location("51.411173", "-0.055369", address);

			Connector connector = new Connector("3-pin Type G (BS1363)", "3.0", "230",
					"13", "Single Phase AC");

			ModificationDates modificationDates = new ModificationDates("2012-06-18 13:48:49","2015-10-13 10:24:36");

			ChargeDevice chargeDevice = new ChargeDevice("fa6c94460e902005a0b660266190c8ba", "PP-12295", location, connector,
					modificationDates);


			chargeDeviceRepository.save(chargeDevice);
			

		};
	}


	CommandLineRunner commandLineRunnerLatLng(){
		return args -> {
			LatLng pointA = new LatLng(51.543784, -0.244061);
			LatLng pointB = new LatLng(51.530182, -0.167535);

			double distanceInMiles = LatLngTool.distance(pointA, pointB , LengthUnit.KILOMETER);

			String hashA = Geohasher.hash(pointA);
			String hashB = Geohasher.hash(pointB);

			LatLng fiveMileTravel = LatLngTool.travel(pointA , LatLngTool.Bearing.EAST , 5 , LengthUnit.MILE);

			double bearing = LatLngTool.initialBearing(pointA , new LatLng(51.543781 , -0.220789));

			System.out.println(fiveMileTravel);
			System.out.println(bearing);
		};
	}

}
