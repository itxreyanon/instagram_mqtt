# Instagram Bot with Session Management

A minimal Instagram bot built with `instagram_mqtt` that provides realtime messaging, push notifications, and automated features with persistent session management.

## Features

- 🔐 **Cookie-based Authentication** with session persistence
- 📨 **Realtime Direct Messages** - Send/receive messages instantly
- 🔔 **Push Notifications** - Get notified of all Instagram activities
- 🤖 **Auto-Reply** - Automatically respond to direct messages
- ❤️ **Auto-Like** - Like recent posts from followed users
- 👤 **Presence Management** - Control online/offline status
- 📊 **Account Statistics** - Monitor your account metrics
- 🔄 **Auto-Reconnect** - Handles connection drops gracefully

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your Instagram credentials:
   ```env
   IG_USERNAME=your_username
   IG_PASSWORD=your_password
   ```

3. **Run the bot:**
   ```bash
   npm start
   ```

## Usage

### Basic Operation

The bot will automatically:
- Login using your credentials or load existing session
- Connect to Instagram's realtime services
- Enable push notifications
- Start auto-reply for direct messages
- Like recent posts every 30 minutes
- Save session for future use

### Manual Commands

You can extend the bot with manual commands by importing it:

```javascript
import bot from './src/index.js';

// Send a test message
await bot.sendTestMessage('thread_id_here', 'Hello from bot!');

// Like recent posts manually
await bot.likeRecentPosts(10);
```

## File Structure

```
src/
├── index.js           # Main bot entry point
├── config.js          # Configuration management
├── session-manager.js # Session persistence
├── realtime-handler.js # Realtime messaging
├── push-handler.js    # Push notifications
└── bot-features.js    # Bot automation features
```

## Key Features Explained

### Session Management
- Automatically saves login session to `session.json`
- Reuses existing session on restart
- Handles session expiration gracefully

### Realtime Messaging
- Receives direct messages instantly
- Sends typing indicators
- Marks messages as seen
- Handles thread updates

### Push Notifications
- Receives all Instagram notifications
- Handles different notification types
- Provides notification filtering

### Auto-Reply System
- Responds to common greetings
- Keyword-based responses
- Natural typing simulation

### Auto-Like Feature
- Likes posts from timeline
- Respects rate limits
- Configurable post count

## Customization

### Adding Custom Responses

Edit `src/bot-features.js` in the `generateReply` method:

```javascript
generateReply(messageText) {
  const text = messageText.toLowerCase();
  
  if (text.includes('your_keyword')) {
    return 'Your custom response';
  }
  
  // ... existing logic
}
```

### Adding New Features

Create new methods in `BotFeatures` class:

```javascript
async yourCustomFeature() {
  // Your custom logic here
  console.log('🔧 Running custom feature');
}
```

Then call it in `src/index.js`:

```javascript
await this.botFeatures.yourCustomFeature();
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `IG_USERNAME` | Instagram username | Required |
| `IG_PASSWORD` | Instagram password | Required |
| `SESSION_FILE` | Session file path | `./session.json` |
| `DEBUG` | Debug logging | `false` |

## Debugging

Enable debug logging:
```bash
DEBUG=ig:* npm start
```

This will show detailed logs from the Instagram API and MQTT connections.

## Important Notes

- Keep your credentials secure
- Don't share your `session.json` file
- Respect Instagram's rate limits
- Use responsibly and follow Instagram's Terms of Service
- The bot will automatically handle reconnections

## Troubleshooting

### Login Issues
- Verify credentials in `.env`
- Delete `session.json` to force fresh login
- Check for 2FA requirements

### Connection Issues
- Check internet connection
- Verify Instagram isn't blocking your IP
- Try restarting the bot

### Rate Limiting
- Reduce auto-like frequency
- Add delays between actions
- Monitor console for rate limit warnings

## License

MIT License - Use responsibly!