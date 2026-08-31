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
MCU starts benchmark:

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

MCU fully processes the lines:
- Parse station name
- Parse temperature
- Perform hash/lookup
- Update min, max, sum, count

Only after processing is complete, the MCU requests the next block:

```text
GET 32
```

If no records are left, host responds:

```text
END
```

MCU stops time measurement and sends the result:

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

MCU  -> RESULT 1842 6
```

### Benchmark rules
- Lines must not be preprocessed before being sent to the MCU.
- The MCU must parse the text format itself.
- The MCU decides via `GET <count>` how many lines it can receive at once.
- A new block may only be requested after the previous block has been fully processed.
- For comparable results, dataset, baud rate, and optional block size should be documented.
- Prefer processing temperatures as fixed-point integers (`12.3 -> 123`).
