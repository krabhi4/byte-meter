# Byte Meter

![Byte Meter Logo](https://bytemeter.krabhi4.in/logo.svg)

A simple and powerful tool designed to help you estimate your internet data usage by calculating data consumption based on speed and time.

## Features

- **Real-time Calculation**: Instantly calculate data usage based on connection speed and duration
- **Multiple Speed Units**: Support for various speed units (Mbps, Kbps, GB/s, etc.)
- **Flexible Time Input**: Calculate usage for seconds, minutes, hours, or days
- **User-friendly Interface**: Clean and intuitive design for easy usage
- **Accurate Estimates**: Precise calculations considering data overhead
- **Export Results**: Save or share your calculations

## Installation

```bash
# Clone the repository
git clone https://github.com/krabhi4/byte-meter.git

# Navigate to the project directory
cd byte-meter

# Install dependencies
pnpm install
```

## Usage

1. Enter your internet connection speed
2. Select the speed unit (Mbps, Kbps, etc.)
3. Input the duration
4. Choose the time unit (seconds, minutes, hours, days)
5. Click "Calculate" to see your estimated data usage

```javascript
// Example calculation
const byteMeter = new ByteMeter();
const result = byteMeter.calculate({
  speed: 100,
  speedUnit: 'Mbps',
  time: 1,
  timeUnit: 'hour',
});
```

## Technical Details

### Calculation Formula

The basic formula used for calculation is:

```
Data Used = Speed × Time × Unit Conversion Factor
```

For example:

- 100 Mbps for 1 hour
- = 100 Mbps × 3600 seconds
- = 360,000 Mb = 45,000 MB = 45 GB

### Supported Units

#### Speed Units

- Kilobits per second (Kbps)
- Megabits per second (Mbps)
- Gigabits per second (Gbps)
- Kilobytes per second (KB/s)
- Megabytes per second (MB/s)
- Gigabytes per second (GB/s)

#### Time Units

- Seconds
- Minutes
- Hours
- Days

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to all contributors who have helped shape Byte Meter
- Inspired by the need for quick and accurate data usage estimation
- Built with modern web technologies

## Contact

Project Link: [https://github.com/krabhi4/byte-meter](https://github.com/krabhi4/byte-meter)

## Support

If you found this project helpful, please give it a ⭐️!

---

Made with ❤️ by Kumar Abhishek
