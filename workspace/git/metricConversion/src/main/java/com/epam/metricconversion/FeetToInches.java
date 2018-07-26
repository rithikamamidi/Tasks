package com.epam.metricconversion;
/** class to convert feet to inches.
 * @author Rithika
 */
public class FeetToInches implements Convert{
	/** converts feet to inches.
     * @param  input **input that the user wants to convert.**
     * @return **converted value**
     */
	public float convertMetric(final float input) {
		return (float) (input * 12);
	}

}
