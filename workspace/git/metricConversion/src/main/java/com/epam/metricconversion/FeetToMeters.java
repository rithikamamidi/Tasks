package com.epam.metricconversion;
/** class to convert feet to meters.
 * @author Rithika
 */
public class FeetToMeters implements Convert {
	/** converts feet to meters.
     * @param  input **input that the user wants to convert.**
     * @return **converted value**
     */
	public float convertMetric(final float input) {
		return (float) (input * 0.3);
	}

}
