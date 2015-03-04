package com.test.angularSpring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.UUID;

/**
 * Created by pcjoshi on 3/3/15.
 */
@SpringBootApplication
@RestController
public class UiApplication {

    @RequestMapping("/resource")
    public Map<String,Object> home(){
        Map<String,Object> model = new HashMap<String,Object>();
        model.put("id", UUID.randomUUID().toString());
        model.put("content","Hello World");
        return model;
    }

    public static void main(String[] args) throws Exception{
        SpringApplication.run(UiApplication.class,args);
    }
}
