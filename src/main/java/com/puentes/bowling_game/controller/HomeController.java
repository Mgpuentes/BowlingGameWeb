package com.puentes.bowling_game.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by Matthew on 5/2/2018.
 *
 * @author Matthew
 */

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "index";
    }
}
