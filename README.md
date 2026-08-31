# mcu-showdown
This is meant to be a fun challange in the same spirit as the 1brc but only for mcus.

## Microcontroller Row Challenge – Serial API

### Data format
Records stay line-based:

```text
Berlin;12.3
Hamburg;-4.7
Munich;18.1
```

Each line ends with `\n`.

### Flow
MCU starts benchmark (and timer):

```text
START
```

MCU requests a specific number of lines:

```text
GET <count>
```

Example:

```text
GET 32
```

Host sends exactly that number of complete lines.

```text
GET 32
```

If no records are left, host responds:

```text
END
```

MCU sends the result (and timer is stopped):

```text
RESULT <elapsed_ms> <rows>
```

### Example

```text
MCU  -> START
MCU  -> GET 3

HOST -> Berlin;12.3
HOST -> Hamburg;-4.7
HOST -> Berlin;13.1

MCU  -> GET 3

HOST -> Munich;18.1
HOST -> Berlin;10.4
HOST -> Hamburg;2.1

MCU  -> GET 3
HOST -> END

MCU  -> RESULT {Abha=-23.0/18.0/59.2, Abidjan=-16.2/26.0/67.3, Abéché=-10.0/29.4/69.0, Accra=-10.1/26.4/66.4, Addis Ababa=-23.7/16.0/67.0, Adelaide=-27.8/17.3/58.5, ...}
```

### Benchmark rules
- Lines must not be preprocessed before being sent to the MCU.
- The MCU must parse the text format itself.
- The MCU decides via `GET <count>` how many lines it can receive at once.
- results are to be reported as JSON in accordance to the 1brc standard
