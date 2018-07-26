package com.epam.metricconversion;
/** Interface Convert to create abstraction.
 * @author Rithika
 */
public interface Convert {
    /** convertMetric is a common method which is to be implemented
     * differently by all the classes.
     * @param input **input which the user wants to convert**
     * @return **converted value.**
     */
     float convertMetric(float input);
}
