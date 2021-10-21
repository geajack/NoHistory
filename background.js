var running = false;

browser.history.onVisited.addListener(
	function onVisited(item)
	{
		if (running)
		{
			browser.history.getVisits({url:item.url}).then(
				function(visits)
				{
					if (visits.length == 1)
					{
						browser.history.deleteUrl({url:item.url});
					}
				}
			);
		}
	}
);

browser.browserAction.onClicked.addListener(
	function onClicked()
	{
		running = !running;
		if (running)
		{
			browser.browserAction.setIcon({path:"./icon_enabled.png"});
		}
		else
		{
			browser.browserAction.setIcon({path:"./icon_disabled.png"});
		}
	}
);