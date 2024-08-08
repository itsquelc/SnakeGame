import React, {useEffect, useMemo, useState} from "react";
import { SafeAreaView, StyleSheet, Dimensions} from "react-native"
import { PanGestureHandler, } from "react-native-gesture-handler"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Direction } from "../types";
import * as Haptics from "expo-haptics";

const { height } = Dimensions.get("window");
import {
    COLS,
    FOOD_START,
    HEADER_HEIGHT,
    INCREMENT,
    PIXEL,
    SNAKE_START,
    SPEED,
} from "../consts";

import Header from "./Header";
import Board from "./Board";
import Snake from "./Snake";
import Food from "./Food";

import { colors } from "../styles/theme";

const Game = () => {
    const [direction, setDirection] = useState(Direction.Right);
    const [snake, setSnake] = useState(SNAKE_START);
    const [food, setFood] = useState(FOOD_START);
    const [isGameOver, setIsGameOver] = useState(false);
    const [isGamePaused, setGamePaused] = useState(false);
    const [score, setScore] = useState(0);

    const insets = useSafeAreaInsets();
    const ROWS = mATH.FLOOR(
        (height - insets?.top - insets?.bottom - HEADER_HEIGHT) / PIXEL
    );
}
