const STATIONS = [{"name": "Abha", "mean": 18.0}, {"name": "Abidjan", "mean": 26.0}, {"name": "Abéché", "mean": 29.4}, {"name": "Accra", "mean": 26.4}, {"name": "Addis Ababa", "mean": 16.0}, {"name": "Adelaide", "mean": 17.3}, {"name": "Aden", "mean": 29.1}, {"name": "Ahvaz", "mean": 25.4}, {"name": "Albuquerque", "mean": 14.0}, {"name": "Alexandra", "mean": 11.0}, {"name": "Alexandria", "mean": 20.0}, {"name": "Algiers", "mean": 18.2}, {"name": "Alice Springs", "mean": 21.0}, {"name": "Almaty", "mean": 10.0}, {"name": "Amsterdam", "mean": 10.2}, {"name": "Anadyr", "mean": -6.9}, {"name": "Anchorage", "mean": 2.8}, {"name": "Andorra la Vella", "mean": 9.8}, {"name": "Ankara", "mean": 12.0}, {"name": "Antananarivo", "mean": 17.9}, {"name": "Antsiranana", "mean": 25.2}, {"name": "Arkhangelsk", "mean": 1.3}, {"name": "Ashgabat", "mean": 17.1}, {"name": "Asmara", "mean": 15.6}, {"name": "Assab", "mean": 30.5}, {"name": "Astana", "mean": 3.5}, {"name": "Athens", "mean": 19.2}, {"name": "Atlanta", "mean": 17.0}, {"name": "Auckland", "mean": 15.2}, {"name": "Austin", "mean": 20.7}, {"name": "Baghdad", "mean": 22.77}, {"name": "Baguio", "mean": 19.5}, {"name": "Baku", "mean": 15.1}, {"name": "Baltimore", "mean": 13.1}, {"name": "Bamako", "mean": 27.8}, {"name": "Bangkok", "mean": 28.6}, {"name": "Bangui", "mean": 26.0}, {"name": "Banjul", "mean": 26.0}, {"name": "Barcelona", "mean": 18.2}, {"name": "Bata", "mean": 25.1}, {"name": "Batumi", "mean": 14.0}, {"name": "Beijing", "mean": 12.9}, {"name": "Beirut", "mean": 20.9}, {"name": "Belgrade", "mean": 12.5}, {"name": "Belize City", "mean": 26.7}, {"name": "Benghazi", "mean": 19.9}, {"name": "Bergen", "mean": 7.7}, {"name": "Berlin", "mean": 10.3}, {"name": "Bilbao", "mean": 14.7}, {"name": "Birao", "mean": 26.5}, {"name": "Bishkek", "mean": 11.3}, {"name": "Bissau", "mean": 27.0}, {"name": "Blantyre", "mean": 22.2}, {"name": "Bloemfontein", "mean": 15.6}, {"name": "Boise", "mean": 11.4}, {"name": "Bordeaux", "mean": 14.2}, {"name": "Bosaso", "mean": 30.0}, {"name": "Boston", "mean": 10.9}, {"name": "Bouaké", "mean": 26.0}, {"name": "Bratislava", "mean": 10.5}, {"name": "Brazzaville", "mean": 25.0}, {"name": "Bridgetown", "mean": 27.0}, {"name": "Brisbane", "mean": 21.4}, {"name": "Brussels", "mean": 10.5}, {"name": "Bucharest", "mean": 10.8}, {"name": "Budapest", "mean": 11.3}, {"name": "Bujumbura", "mean": 23.8}, {"name": "Bulawayo", "mean": 18.9}, {"name": "Burnie", "mean": 13.1}, {"name": "Busan", "mean": 15.0}, {"name": "Cabo San Lucas", "mean": 23.9}, {"name": "Cairns", "mean": 25.0}, {"name": "Cairo", "mean": 21.4}, {"name": "Calgary", "mean": 4.4}, {"name": "Canberra", "mean": 13.1}, {"name": "Cape Town", "mean": 16.2}, {"name": "Changsha", "mean": 17.4}, {"name": "Charlotte", "mean": 16.1}, {"name": "Chiang Mai", "mean": 25.8}, {"name": "Chicago", "mean": 9.8}, {"name": "Chihuahua", "mean": 18.6}, {"name": "Chișinău", "mean": 10.2}, {"name": "Chittagong", "mean": 25.9}, {"name": "Chongqing", "mean": 18.6}, {"name": "Christchurch", "mean": 12.2}, {"name": "City of San Marino", "mean": 11.8}, {"name": "Colombo", "mean": 27.4}, {"name": "Columbus", "mean": 11.7}, {"name": "Conakry", "mean": 26.4}, {"name": "Copenhagen", "mean": 9.1}, {"name": "Cotonou", "mean": 27.2}, {"name": "Cracow", "mean": 9.3}, {"name": "Da Lat", "mean": 17.9}, {"name": "Da Nang", "mean": 25.8}, {"name": "Dakar", "mean": 24.0}, {"name": "Dallas", "mean": 19.0}, {"name": "Damascus", "mean": 17.0}, {"name": "Dampier", "mean": 26.4}, {"name": "Dar es Salaam", "mean": 25.8}, {"name": "Darwin", "mean": 27.6}, {"name": "Denpasar", "mean": 23.7}, {"name": "Denver", "mean": 10.4}, {"name": "Detroit", "mean": 10.0}, {"name": "Dhaka", "mean": 25.9}, {"name": "Dikson", "mean": -11.1}, {"name": "Dili", "mean": 26.6}, {"name": "Djibouti", "mean": 29.9}, {"name": "Dodoma", "mean": 22.7}, {"name": "Dolisie", "mean": 24.0}, {"name": "Douala", "mean": 26.7}, {"name": "Dubai", "mean": 26.9}, {"name": "Dublin", "mean": 9.8}, {"name": "Dunedin", "mean": 11.1}, {"name": "Durban", "mean": 20.6}, {"name": "Dushanbe", "mean": 14.7}, {"name": "Edinburgh", "mean": 9.3}, {"name": "Edmonton", "mean": 4.2}, {"name": "El Paso", "mean": 18.1}, {"name": "Entebbe", "mean": 21.0}, {"name": "Erbil", "mean": 19.5}, {"name": "Erzurum", "mean": 5.1}, {"name": "Fairbanks", "mean": -2.3}, {"name": "Fianarantsoa", "mean": 17.9}, {"name": "Flores,  Petén", "mean": 26.4}, {"name": "Frankfurt", "mean": 10.6}, {"name": "Fresno", "mean": 17.9}, {"name": "Fukuoka", "mean": 17.0}, {"name": "Gabès", "mean": 19.5}, {"name": "Gaborone", "mean": 21.0}, {"name": "Gagnoa", "mean": 26.0}, {"name": "Gangtok", "mean": 15.2}, {"name": "Garissa", "mean": 29.3}, {"name": "Garoua", "mean": 28.3}, {"name": "George Town", "mean": 27.9}, {"name": "Ghanzi", "mean": 21.4}, {"name": "Gjoa Haven", "mean": -14.4}, {"name": "Guadalajara", "mean": 20.9}, {"name": "Guangzhou", "mean": 22.4}, {"name": "Guatemala City", "mean": 20.4}, {"name": "Halifax", "mean": 7.5}, {"name": "Hamburg", "mean": 9.7}, {"name": "Hamilton", "mean": 13.8}, {"name": "Hanga Roa", "mean": 20.5}, {"name": "Hanoi", "mean": 23.6}, {"name": "Harare", "mean": 18.4}, {"name": "Harbin", "mean": 5.0}, {"name": "Hargeisa", "mean": 21.7}, {"name": "Hat Yai", "mean": 27.0}, {"name": "Havana", "mean": 25.2}, {"name": "Helsinki", "mean": 5.9}, {"name": "Heraklion", "mean": 18.9}, {"name": "Hiroshima", "mean": 16.3}, {"name": "Ho Chi Minh City", "mean": 27.4}, {"name": "Hobart", "mean": 12.7}, {"name": "Hong Kong", "mean": 23.3}, {"name": "Honiara", "mean": 26.5}, {"name": "Honolulu", "mean": 25.4}, {"name": "Houston", "mean": 20.8}, {"name": "Ifrane", "mean": 11.4}, {"name": "Indianapolis", "mean": 11.8}, {"name": "Iqaluit", "mean": -9.3}, {"name": "Irkutsk", "mean": 1.0}, {"name": "Istanbul", "mean": 13.9}, {"name": "İzmir", "mean": 17.9}, {"name": "Jacksonville", "mean": 20.3}, {"name": "Jakarta", "mean": 26.7}, {"name": "Jayapura", "mean": 27.0}, {"name": "Jerusalem", "mean": 18.3}, {"name": "Johannesburg", "mean": 15.5}, {"name": "Jos", "mean": 22.8}, {"name": "Juba", "mean": 27.8}, {"name": "Kabul", "mean": 12.1}, {"name": "Kampala", "mean": 20.0}, {"name": "Kandi", "mean": 27.7}, {"name": "Kankan", "mean": 26.5}, {"name": "Kano", "mean": 26.4}, {"name": "Kansas City", "mean": 12.5}, {"name": "Karachi", "mean": 26.0}, {"name": "Karonga", "mean": 24.4}, {"name": "Kathmandu", "mean": 18.3}, {"name": "Khartoum", "mean": 29.9}, {"name": "Kingston", "mean": 27.4}, {"name": "Kinshasa", "mean": 25.3}, {"name": "Kolkata", "mean": 26.7}, {"name": "Kuala Lumpur", "mean": 27.3}, {"name": "Kumasi", "mean": 26.0}, {"name": "Kunming", "mean": 15.7}, {"name": "Kuopio", "mean": 3.4}, {"name": "Kuwait City", "mean": 25.7}, {"name": "Kyiv", "mean": 8.4}, {"name": "Kyoto", "mean": 15.8}, {"name": "La Ceiba", "mean": 26.2}, {"name": "La Paz", "mean": 23.7}, {"name": "Lagos", "mean": 26.8}, {"name": "Lahore", "mean": 24.3}, {"name": "Lake Havasu City", "mean": 23.7}, {"name": "Lake Tekapo", "mean": 8.7}, {"name": "Las Palmas de Gran Canaria", "mean": 21.2}, {"name": "Las Vegas", "mean": 20.3}, {"name": "Launceston", "mean": 13.1}, {"name": "Lhasa", "mean": 7.6}, {"name": "Libreville", "mean": 25.9}, {"name": "Lisbon", "mean": 17.5}, {"name": "Livingstone", "mean": 21.8}, {"name": "Ljubljana", "mean": 10.9}, {"name": "Lodwar", "mean": 29.3}, {"name": "Lomé", "mean": 26.9}, {"name": "London", "mean": 11.3}, {"name": "Los Angeles", "mean": 18.6}, {"name": "Louisville", "mean": 13.9}, {"name": "Luanda", "mean": 25.8}, {"name": "Lubumbashi", "mean": 20.8}, {"name": "Lusaka", "mean": 19.9}, {"name": "Luxembourg City", "mean": 9.3}, {"name": "Lviv", "mean": 7.8}, {"name": "Lyon", "mean": 12.5}, {"name": "Madrid", "mean": 15.0}, {"name": "Mahajanga", "mean": 26.3}, {"name": "Makassar", "mean": 26.7}, {"name": "Makurdi", "mean": 26.0}, {"name": "Malabo", "mean": 26.3}, {"name": "Malé", "mean": 28.0}, {"name": "Managua", "mean": 27.3}, {"name": "Manama", "mean": 26.5}, {"name": "Mandalay", "mean": 28.0}, {"name": "Mango", "mean": 28.1}, {"name": "Manila", "mean": 28.4}, {"name": "Maputo", "mean": 22.8}, {"name": "Marrakesh", "mean": 19.6}, {"name": "Marseille", "mean": 15.8}, {"name": "Maun", "mean": 22.4}, {"name": "Medan", "mean": 26.5}, {"name": "Mek'ele", "mean": 22.7}, {"name": "Melbourne", "mean": 15.1}, {"name": "Memphis", "mean": 17.2}, {"name": "Mexicali", "mean": 23.1}, {"name": "Mexico City", "mean": 17.5}, {"name": "Miami", "mean": 24.9}, {"name": "Milan", "mean": 13.0}, {"name": "Milwaukee", "mean": 8.9}, {"name": "Minneapolis", "mean": 7.8}, {"name": "Minsk", "mean": 6.7}, {"name": "Mogadishu", "mean": 27.1}, {"name": "Mombasa", "mean": 26.3}, {"name": "Monaco", "mean": 16.4}, {"name": "Moncton", "mean": 6.1}, {"name": "Monterrey", "mean": 22.3}, {"name": "Montreal", "mean": 6.8}, {"name": "Moscow", "mean": 5.8}, {"name": "Mumbai", "mean": 27.1}, {"name": "Murmansk", "mean": 0.6}, {"name": "Muscat", "mean": 28.0}, {"name": "Mzuzu", "mean": 17.7}, {"name": "N'Djamena", "mean": 28.3}, {"name": "Naha", "mean": 23.1}, {"name": "Nairobi", "mean": 17.8}, {"name": "Nakhon Ratchasima", "mean": 27.3}, {"name": "Napier", "mean": 14.6}, {"name": "Napoli", "mean": 15.9}, {"name": "Nashville", "mean": 15.4}, {"name": "Nassau", "mean": 24.6}, {"name": "Ndola", "mean": 20.3}, {"name": "New Delhi", "mean": 25.0}, {"name": "New Orleans", "mean": 20.7}, {"name": "New York City", "mean": 12.9}, {"name": "Ngaoundéré", "mean": 22.0}, {"name": "Niamey", "mean": 29.3}, {"name": "Nicosia", "mean": 19.7}, {"name": "Niigata", "mean": 13.9}, {"name": "Nouadhibou", "mean": 21.3}, {"name": "Nouakchott", "mean": 25.7}, {"name": "Novosibirsk", "mean": 1.7}, {"name": "Nuuk", "mean": -1.4}, {"name": "Odesa", "mean": 10.7}, {"name": "Odienné", "mean": 26.0}, {"name": "Oklahoma City", "mean": 15.9}, {"name": "Omaha", "mean": 10.6}, {"name": "Oranjestad", "mean": 28.1}, {"name": "Oslo", "mean": 5.7}, {"name": "Ottawa", "mean": 6.6}, {"name": "Ouagadougou", "mean": 28.3}, {"name": "Ouahigouya", "mean": 28.6}, {"name": "Ouarzazate", "mean": 18.9}, {"name": "Oulu", "mean": 2.7}, {"name": "Palembang", "mean": 27.3}, {"name": "Palermo", "mean": 18.5}, {"name": "Palm Springs", "mean": 24.5}, {"name": "Palmerston North", "mean": 13.2}, {"name": "Panama City", "mean": 28.0}, {"name": "Parakou", "mean": 26.8}, {"name": "Paris", "mean": 12.3}, {"name": "Perth", "mean": 18.7}, {"name": "Petropavlovsk-Kamchatsky", "mean": 1.9}, {"name": "Philadelphia", "mean": 13.2}, {"name": "Phnom Penh", "mean": 28.3}, {"name": "Phoenix", "mean": 23.9}, {"name": "Pittsburgh", "mean": 10.8}, {"name": "Podgorica", "mean": 15.3}, {"name": "Pointe-Noire", "mean": 26.1}, {"name": "Pontianak", "mean": 27.7}, {"name": "Port Moresby", "mean": 26.9}, {"name": "Port Sudan", "mean": 28.4}, {"name": "Port Vila", "mean": 24.3}, {"name": "Port-Gentil", "mean": 26.0}, {"name": "Portland (OR)", "mean": 12.4}, {"name": "Porto", "mean": 15.7}, {"name": "Prague", "mean": 8.4}, {"name": "Praia", "mean": 24.4}, {"name": "Pretoria", "mean": 18.2}, {"name": "Pyongyang", "mean": 10.8}, {"name": "Rabat", "mean": 17.2}, {"name": "Rangpur", "mean": 24.4}, {"name": "Reggane", "mean": 28.3}, {"name": "Reykjavík", "mean": 4.3}, {"name": "Riga", "mean": 6.2}, {"name": "Riyadh", "mean": 26.0}, {"name": "Rome", "mean": 15.2}, {"name": "Roseau", "mean": 26.2}, {"name": "Rostov-on-Don", "mean": 9.9}, {"name": "Sacramento", "mean": 16.3}, {"name": "Saint Petersburg", "mean": 5.8}, {"name": "Saint-Pierre", "mean": 5.7}, {"name": "Salt Lake City", "mean": 11.6}, {"name": "San Antonio", "mean": 20.8}, {"name": "San Diego", "mean": 17.8}, {"name": "San Francisco", "mean": 14.6}, {"name": "San Jose", "mean": 16.4}, {"name": "San José", "mean": 22.6}, {"name": "San Juan", "mean": 27.2}, {"name": "San Salvador", "mean": 23.1}, {"name": "Sana'a", "mean": 20.0}, {"name": "Santo Domingo", "mean": 25.9}, {"name": "Sapporo", "mean": 8.9}, {"name": "Sarajevo", "mean": 10.1}, {"name": "Saskatoon", "mean": 3.3}, {"name": "Seattle", "mean": 11.3}, {"name": "Ségou", "mean": 28.0}, {"name": "Seoul", "mean": 12.5}, {"name": "Seville", "mean": 19.2}, {"name": "Shanghai", "mean": 16.7}, {"name": "Singapore", "mean": 27.0}, {"name": "Skopje", "mean": 12.4}, {"name": "Sochi", "mean": 14.2}, {"name": "Sofia", "mean": 10.6}, {"name": "Sokoto", "mean": 28.0}, {"name": "Split", "mean": 16.1}, {"name": "St. John's", "mean": 5.0}, {"name": "St. Louis", "mean": 13.9}, {"name": "Stockholm", "mean": 6.6}, {"name": "Surabaya", "mean": 27.1}, {"name": "Suva", "mean": 25.6}, {"name": "Suwałki", "mean": 7.2}, {"name": "Sydney", "mean": 17.7}, {"name": "Tabora", "mean": 23.0}, {"name": "Tabriz", "mean": 12.6}, {"name": "Taipei", "mean": 23.0}, {"name": "Tallinn", "mean": 6.4}, {"name": "Tamale", "mean": 27.9}, {"name": "Tamanrasset", "mean": 21.7}, {"name": "Tampa", "mean": 22.9}, {"name": "Tashkent", "mean": 14.8}, {"name": "Tauranga", "mean": 14.8}, {"name": "Tbilisi", "mean": 12.9}, {"name": "Tegucigalpa", "mean": 21.7}, {"name": "Tehran", "mean": 17.0}, {"name": "Tel Aviv", "mean": 20.0}, {"name": "Thessaloniki", "mean": 16.0}, {"name": "Thiès", "mean": 24.0}, {"name": "Tijuana", "mean": 17.8}, {"name": "Timbuktu", "mean": 28.0}, {"name": "Tirana", "mean": 15.2}, {"name": "Toamasina", "mean": 23.4}, {"name": "Tokyo", "mean": 15.4}, {"name": "Toliara", "mean": 24.1}, {"name": "Toluca", "mean": 12.4}, {"name": "Toronto", "mean": 9.4}, {"name": "Tripoli", "mean": 20.0}, {"name": "Tromsø", "mean": 2.9}, {"name": "Tucson", "mean": 20.9}, {"name": "Tunis", "mean": 18.4}, {"name": "Ulaanbaatar", "mean": -0.4}, {"name": "Upington", "mean": 20.4}, {"name": "Ürümqi", "mean": 7.4}, {"name": "Vaduz", "mean": 10.1}, {"name": "Valencia", "mean": 18.3}, {"name": "Valletta", "mean": 18.8}, {"name": "Vancouver", "mean": 10.4}, {"name": "Veracruz", "mean": 25.4}, {"name": "Vienna", "mean": 10.4}, {"name": "Vientiane", "mean": 25.9}, {"name": "Villahermosa", "mean": 27.1}, {"name": "Vilnius", "mean": 6.0}, {"name": "Virginia Beach", "mean": 15.8}, {"name": "Vladivostok", "mean": 4.9}, {"name": "Warsaw", "mean": 8.5}, {"name": "Washington, D.C.", "mean": 14.6}, {"name": "Wau", "mean": 27.8}, {"name": "Wellington", "mean": 12.9}, {"name": "Whitehorse", "mean": -0.1}, {"name": "Wichita", "mean": 13.9}, {"name": "Willemstad", "mean": 28.0}, {"name": "Winnipeg", "mean": 3.0}, {"name": "Wrocław", "mean": 9.6}, {"name": "Xi'an", "mean": 14.1}, {"name": "Yakutsk", "mean": -8.8}, {"name": "Yangon", "mean": 27.5}, {"name": "Yaoundé", "mean": 23.8}, {"name": "Yellowknife", "mean": -4.3}, {"name": "Yerevan", "mean": 12.4}, {"name": "Yinchuan", "mean": 9.0}, {"name": "Zagreb", "mean": 10.7}, {"name": "Zanzibar City", "mean": 26.0}, {"name": "Zürich", "mean": 9.3}];
const TEMP_STD_DEV = 10;
const MAX_LINES_PER_WRITE = 2048;

const els = {
  baudRate: document.getElementById('baudRate'),
  totalRows: document.getElementById('totalRows'),
  connectBtn: document.getElementById('connectBtn'),
  disconnectBtn: document.getElementById('disconnectBtn'),
  serialSupport: document.getElementById('serialSupport'),
  status: document.getElementById('status'),
  remaining: document.getElementById('remaining'),
  sent: document.getElementById('sent'),
  rps: document.getElementById('rps'),
  log: document.getElementById('log')
};

let port;
let reader;
let writer;
let readLoopActive = false;
let readBuffer = '';
let totalRowsTarget = 0;
let rowsRemaining = 0;
let rowsSent = 0;
let sessionStartMs = 0;
let endSent = false;

init();

function init() {
  if (!('serial' in navigator)) {
    els.serialSupport.textContent = 'Web Serial is unavailable. Use a Chromium-based browser over HTTPS or localhost.';
    els.connectBtn.disabled = true;
    return;
  }

  els.connectBtn.addEventListener('click', connectSerial);
  els.disconnectBtn.addEventListener('click', disconnectSerial);
  updateStats();
}

async function connectSerial() {
  try {
    const baudRate = Math.max(300, Number.parseInt(els.baudRate.value, 10) || 115200);
    port = await navigator.serial.requestPort();
    await port.open({ baudRate });
    writer = port.writable.getWriter();
    readLoopActive = true;
    setConnectionState(true);
    log(`Connected (baud ${baudRate}).`);
    readFromPort();
  }
  catch (error) {
    log(`Connect failed: ${error.message}`);
  }
}

async function disconnectSerial() {
  readLoopActive = false;

  try {
    if (reader) {
      await reader.cancel();
      reader.releaseLock();
      reader = undefined;
    }
  }
  catch {}

  try {
    if (writer) {
      writer.releaseLock();
      writer = undefined;
    }
  }
  catch {}

  try {
    if (port) {
      await port.close();
      port = undefined;
    }
  }
  catch (error) {
    log(`Disconnect warning: ${error.message}`);
  }

  setConnectionState(false);
  log('Disconnected.');
}

async function readFromPort() {
  const decoder = new TextDecoder();

  while (port?.readable && readLoopActive) {
    reader = port.readable.getReader();

    try {
      while (readLoopActive) {
        const { value, done } = await reader.read();
        if (done) break;
        if (value) processIncoming(decoder.decode(value, { stream: true }));
      }
    }
    catch (error) {
      if (readLoopActive) log(`Read error: ${error.message}`);
    }
    finally {
      reader.releaseLock();
      reader = undefined;
    }
  }
}

function processIncoming(chunk) {
  readBuffer += chunk;
  const lines = readBuffer.split(/\r?\n/);
  readBuffer = lines.pop() || '';
  for (const line of lines) handleCommand(line.trim());
}

async function handleCommand(line) {
  if (!line) return;
  log(`MCU → ${line}`);

  if (line === 'START') {
    totalRowsTarget = Math.max(1, Number.parseInt(els.totalRows.value, 10) || 1);
    rowsRemaining = totalRowsTarget;
    rowsSent = 0;
    sessionStartMs = performance.now();
    endSent = false;
    updateStats();
    log(`Prepared ${totalRowsTarget.toLocaleString()} synthetic rows.`);
    return;
  }

  const getMatch = /^GET\s+(\d+)$/i.exec(line);
  if (getMatch) {
    const requested = Number.parseInt(getMatch[1], 10);
    await sendRows(requested);
    return;
  }

  if (line.startsWith('RESULT ')) {
    const elapsed = Math.max(0.001, (performance.now() - sessionStartMs) / 1000);
    const hostRate = (rowsSent / elapsed).toFixed(0);
    log(`Session summary: sent ${rowsSent.toLocaleString()} rows at ~${hostRate} rows/s.`);
    return;
  }

  log(`Unknown command ignored: ${line}`);
}

async function sendRows(requested) {
  if (!writer) return;

  if (rowsRemaining <= 0) {
    if (!endSent) {
      await writeText('END\n');
      endSent = true;
      log('HOST → END');
    }
    return;
  }

  let toSend = Math.min(requested, rowsRemaining);

  while (toSend > 0) {
    const batchSize = Math.min(MAX_LINES_PER_WRITE, toSend);
    const payload = buildLines(batchSize);
    await writeText(payload);
    rowsSent += batchSize;
    rowsRemaining -= batchSize;
    toSend -= batchSize;
    updateStats();
  }
}

function buildLines(count) {
  const out = new Array(count);
  for (let i = 0; i < count; i++) {
    const station = STATIONS[(Math.random() * STATIONS.length) | 0];
    const value = roundOneDecimal(gaussian(station.mean, TEMP_STD_DEV)).toFixed(1);
    out[i] = `${station.name};${value}\n`;
  }
  return out.join('');
}

function gaussian(mean, stdDev) {
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  return mean + z * stdDev;
}

function roundOneDecimal(value) {
  return Math.round(value * 10) / 10;
}

async function writeText(text) {
  await writer.write(new TextEncoder().encode(text));
}

function setConnectionState(isConnected) {
  els.connectBtn.disabled = isConnected;
  els.disconnectBtn.disabled = !isConnected;
  els.status.textContent = isConnected ? 'Connected' : 'Disconnected';
}

function updateStats() {
  els.remaining.textContent = rowsRemaining.toLocaleString();
  els.sent.textContent = rowsSent.toLocaleString();

  const elapsed = sessionStartMs ? Math.max(0.001, (performance.now() - sessionStartMs) / 1000) : 0;
  const rate = elapsed > 0 ? Math.round(rowsSent / elapsed) : 0;
  els.rps.textContent = rate.toLocaleString();
}

function log(message) {
  const now = new Date().toISOString().slice(11, 19);
  els.log.textContent += `[${now}] ${message}\n`;
  els.log.scrollTop = els.log.scrollHeight;
}
