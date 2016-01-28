package com.hotel.yosi;

import static spark.Spark.get;
import static spark.SparkBase.staticFileLocation;

public class Main {
	public static void main(String[] args) {

		staticFileLocation("/public");
        get("/hello", (req, res) -> "Hello World");
    }
}
