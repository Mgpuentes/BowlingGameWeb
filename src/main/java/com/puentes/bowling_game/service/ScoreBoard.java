package com.puentes.bowling_game.service;

import com.puentes.bowling_game.service.Frame;

/**
 * Created by Matthew on 5/4/2018.
 *
 * @author Matthew Puentes
 */

public class ScoreBoard {

    /**
     * Evaluate scores and return sum
     *
     * @param string the scores from each frame
     * @return sum of scores from frames
     */
    public static int executeInputs(String string) {

        //split input into array
        String[] split = string.split("\\s+");

        int sum = 0;

        try{

            //generate frames
            com.puentes.bowling_game.service.Frame[] frame = new com.puentes.bowling_game.service.Frame[10];
            frame[9] = new com.puentes.bowling_game.service.Frame(split[9], null);
            for (int i = 8; i >= 0; i --){
                frame[i] = new com.puentes.bowling_game.service.Frame(split[i], frame[i+1]);
            }

            //generate total value
            for(int i = 0; i < frame.length; i++){
                sum += frame[i].getScore();
            }
            System.out.println(sum);
        }catch (Exception e){
            System.err.println("There was an error calculating the total score for frame:");
            System.err.println(string);
            e.printStackTrace();
        }

        return sum;

    }

}
