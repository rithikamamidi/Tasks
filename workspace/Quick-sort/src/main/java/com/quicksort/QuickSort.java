package com.quicksort;

public class QuickSort {
	 public int[] quickSort(int[] array)
	    {
	        sort(array,0,array.length-1);
	        return array;
	    }
	    public void sort(int array[],int low,int high) 
	    {
	        int i=low,j=high;
	        int temp;
	        int pivot=array[(low+high)/2];
	        while(i<=j) 
	        {
	            while(array[i]<pivot)
	                i++;
	            while(array[j]>pivot)
	                j--;
	            if(i<=j) 
	            {
	                temp=array[i];
	                array[i]=array[j];
	                array[j]=temp;
	                i++;
	                j--;
	            }
	        }
	        if(low<j)
	            sort(array,low,j);
	        if(i<high)
	            sort(array,i,high);
	    }

}
