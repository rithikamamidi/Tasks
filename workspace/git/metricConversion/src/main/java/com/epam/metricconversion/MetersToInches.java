package com.epam.metricconversion;
/** class to convert meters to inches.
 * @author Rithika
 */
public class MetersToInches implements Convert {
    /** converts meters to inches.
     * @param  input **input that the user wants to convert.**
     * @return **converted value**
     */
    public float convertMetric(final float input) {
       return (float) (input * 39.3);
     }
}
