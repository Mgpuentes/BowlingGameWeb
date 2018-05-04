package com.puentes.bowling_game.controller;

import com.puentes.bowling_game.service.Frame;
import com.puentes.bowling_game.service.ScoreBoard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

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

    /**
     * Compute values sent from total score of game.
     *
     * @param request
     * @return
     */
    @RequestMapping(value = "/compute", consumes = MediaType.APPLICATION_JSON_VALUE, method = { RequestMethod.GET, RequestMethod.POST })
    public @ResponseBody Integer compute(HttpServletRequest request) {

        String[] scores = request.getParameterValues("scores");
        String[] values = scores[0].split(",");

        StringBuilder stringBuilder = new StringBuilder();
        for (int i = 0; i < values.length - 1; i+=2) {
            stringBuilder.append(values[i]).append(values[i+1]).append(" ");
        }

        String input = (stringBuilder.toString().trim());

        assert input.length() == 10; // "X X X X X X X X X XXX"

        int totalScore = ScoreBoard.executeInputs(input);

        return totalScore;
    }

}
