package com.puentes.bowling_game.model;

/**
 * Created by Matthew on 5/2/2018.
 *
 * @author Matthew
 */
public class Player {

    private int totalScore;
    private boolean needExtraRoll;
    private boolean sparePrevious;
    public String spareRollValue;


    public void setTotalScore(int score){

        totalScore = score;
    }

    public int getTotalScore(){

        return totalScore;
    }


    public void setExtraRoll(boolean extraRoll){

        needExtraRoll = extraRoll;
    }


    public boolean getExtraRoll(){

        return needExtraRoll;
    }


    public void setSparePrevious(boolean spare){

        sparePrevious = spare;
    }


    public boolean getSparePrevious(){

        return sparePrevious;
    }
}
