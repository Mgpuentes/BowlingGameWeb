package com.puentes.bowling_game.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by Matthew on 5/2/2018.
 *
 * @author Matthew Puentes
 */

@Controller
public class HomeController {

    /**
     * Mapping to home template
     *
     * @return home template
     */
    @GetMapping("/")
    public String home() {
        return "index";
    }
}
