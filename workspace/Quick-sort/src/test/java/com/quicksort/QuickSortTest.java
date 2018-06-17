package com.quicksort;

import static org.junit.Assert.*;
import java.util.Arrays;

import org.junit.Test;

public class QuickSortTest {

	@Test
	public void test() {
		QuickSort obj=new QuickSort();
		assertTrue(Arrays.equals(new int[]{1,3,5,8},obj.quickSort(new int[]{3,1,5,8})));
	}

}
