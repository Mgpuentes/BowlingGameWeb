package com.puentes.bowling_game.service;

import com.puentes.bowling_game.model.Player;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

/**
 * Created by Matthew on 5/2/2018.
 *
 * @author Matthew
 */

@Service
public class Frame {

    //counts each frame
    private static int listCounter = 0;

    //count each roll
    private static int rollCount = 0;

    //check if strike on first throw
    private static boolean strikeFirstThrow;

    //special score values
    private final static int STRIKE_SCORE = 10;
    private final static int MISS_SCORE = 0;
    private final static int SPARE_SCORE = 10;

    //list of user scores in bowling game
    private static ArrayList<Integer> userScores = new ArrayList<Integer>();
    //player for each bowling game
    private static Player player = new Player();
    //private static Scanner userInput = new Scanner(System.in);

//    /**
//     * Returns the score of first roll.
//     *
//     * @param playerFirstRoll first roll of frame
//     * @return Integer of first roll score.
//     */
//    private static int rollOne(String playerFirstRoll) {
//
//        int playerCurrentScore = 0;
//
//        switch (playerFirstRoll) {
//            case "X":
//            case "x":
//
//                playerCurrentScore += STRIKE_SCORE;
//                player.setExtraRoll(true);
//                break;
//            case "-":
//
//                playerCurrentScore += MISS_SCORE;
//                player.setExtraRoll(false);
//                break;
//            default:
//
//                playerCurrentScore += Integer.parseInt(playerFirstRoll);
//                player.setExtraRoll(false);
//                break;
//        }
//
//        return playerCurrentScore;
//    }
//
//    /**
//     * Returns the score of second roll.
//     *
//     * @param playerSecondRoll
//     * @param playerExtraRoll
//     * @return Integer of second roll score.
//     */
//    private static int rollTwo(String playerSecondRoll, String playerExtraRoll) {
//
//        int rollTwoScore = 0;
//
//
//        switch (playerSecondRoll) {
//            case "X":
//            case "x":
//
//                rollTwoScore += STRIKE_SCORE;
//                //player scores strike at 10th frame
//                if (player.getExtraRoll()) {
//                    rollTwoScore += extraRoll(playerExtraRoll);
//                }
//                break;
//            case "-":
//
//                rollTwoScore += MISS_SCORE;
//                if (player.getExtraRoll()) {
//                    rollTwoScore += extraRoll(playerExtraRoll);
//                }
//                break;
//            case "/":
//
//                player.setSparePrevious(true);
//                break;
//            default:
//
//                rollTwoScore += Integer.parseInt(playerSecondRoll);
//
//                if (player.getExtraRoll()) {
//
//                    rollTwoScore += extraRoll(playerExtraRoll);
//                }
//                break;
//        }
//
//        return rollTwoScore;
//    }
//
//    /**
//     * Returns the score of extra roll.
//     *
//     * @param playerExtraRoll
//     * @return Integer of extra roll score.
//     */
//    private static int extraRoll(String playerExtraRoll) {
//
//        int extraRollScore = 0;
//
//        if (playerExtraRoll.equalsIgnoreCase("x")) {
//
//            extraRollScore += STRIKE_SCORE;
//        } else if (playerExtraRoll.equals("-")) {
//
//            extraRollScore += MISS_SCORE;
//        } else {
//
//            extraRollScore += Integer.parseInt(playerExtraRoll);
//        }
//
//        return extraRollScore;
//    }
//
//    /**
//     * Returns the score of one frame.
//     *
//     * @param playerFirstRoll
//     * @param playerSecondRoll
//     * @return Integer of total frame score.
//     */
//    private int calculateFrame(String playerFirstRoll, String playerSecondRoll, String playerExtraRoll) {
//
//        int playerFrameScore = 0;
//
//        playerFrameScore += rollOne(playerFirstRoll);
//
//        if (player.getSparePrevious()) {
//
//            userScores.set(listCounter - 1, playerFrameScore + SPARE_SCORE);
//        }
//
//        playerFrameScore += rollTwo(playerSecondRoll, playerExtraRoll);
//        userScores.add(playerFrameScore);
//        listCounter++;
//
//        return playerFrameScore;
//    }
//
//    /**
//     * Starts the bowling frame and outputs
//     * total score to console.
//     *
//     * @param playerFirstRoll
//     */
//    public void startFrame(String playerFirstRoll, String playerSecondRoll, String playerExtraRoll) {
//
//        int frameCount = 0;
//
//        do {
//
//            this.calculateFrame(playerFirstRoll, playerSecondRoll, playerExtraRoll);
//            frameCount++;
//        }
//
//        while (frameCount < 10);
//
//        if (player.getSparePrevious()) {
//
//            userScores.set(listCounter - 1, Integer.parseInt(playerFirstRoll) + SPARE_SCORE);
//        }
//
//        player.setTotalScore(this.totalFrameScore());
//
//        System.out.println("Total Score is: " + player.getTotalScore());
//    }
//
//    /**
//     * Calculates all the frame scores and
//     * returns the total score.
//     *
//     * @return Integer of total score.
//     */


    private int calculateFrame(ArrayList<Integer> userScores) {

        int frameScore = 0;
        int index = 0;

        for (int score : userScores) {
            if (score == 10) {
                frameScore += STRIKE_SCORE + (userScores.get(index + 1) + (userScores.get(index + 2)));
            }

            index += 1;
        }
        return 1;
    }


    /**
     *Calculate total score of frames
     *
     * @return total frame scores
     */
    public int totalFrameScore() {

        int totalScore = 0;

        for (Integer userScore : userScores) {

            totalScore += userScore;
        }

        return totalScore;
    }


    /**
     * Inserts score into total score array list.
     *
     * @param userRoll The score inserted into total scores array list.
     */
    public int insertScore(int userRoll) {

        if (rollCount < 19) {
            userScores.add(userRoll);
            rollCount += 1;
        }

        return userRoll;
    }
}
