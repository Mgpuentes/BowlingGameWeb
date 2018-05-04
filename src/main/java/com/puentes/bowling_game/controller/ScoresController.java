package com.puentes.bowling_game.controller;

import com.puentes.bowling_game.service.Frame;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.awt.*;

/**
 * Created by Matthew on 5/2/2018.
 *
 * @author Matthew
 */

@RestController
@RequestMapping(value = "/scores")
public class ScoresController {

    private final Frame frame;

    @Autowired
    public ScoresController(Frame frame) {
        this.frame = frame;
    }


    @GetMapping(value = "/1", consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody Integer score1(@RequestParam(name = "id") String id) {
        System.out.println("We are here with " + id);
        return 10;
    }

    @PostMapping(value = "/2", consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody Integer score2(@RequestParam(name = "id") String id) {
        int userRoll = Integer.parseInt(id);
        frame.insertScore(userRoll);
        System.out.println(frame.totalFrameScore());
        return 20;
    }

}
