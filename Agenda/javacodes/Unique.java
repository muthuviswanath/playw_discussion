package Agenda.javacodes;

import java.util.ArrayList;

public class Unique {
    public static void main(String[] args) {
        int[] arr = {1,2,3,2,4,3,5};
        ArrayList<Integer> uniquevals = new ArrayList<>();
        for(int i=0; i<arr.length; i++){
            int val = arr[i];
            int firstIndex = indexOf(arr, val);

            if(firstIndex == i){
                uniquevals.add(val);
            }
        }
        System.out.println(uniquevals);
    }

    public static int indexOf(int[] array, int value){
        for(int i=0; i<array.length; i++){
            if(array[i] == value) return i;
        }
        return -1;
    }
}