package com.aichat;

import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.Context;
import android.content.SharedPreferences;
import android.widget.RemoteViews;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * Implementation of App Widget functionality.
 */
public class ChatWidget extends AppWidgetProvider {

    static void updateAppWidget(Context context, AppWidgetManager appWidgetManager, int appWidgetId) {

        try{
            SharedPreferences sharedPref = context.getSharedPreferences("DATA", Context.MODE_PRIVATE);
            String stringJsonData = sharedPref.getString("TestData", "{\"titlew\": \'Hello World!\',\"description\": \'This is a widget.\',\"value\": \'This is some text.\'}");
            JSONObject widgetData = new JSONObject(stringJsonData);

            RemoteViews views = new RemoteViews(context.getPackageName(), R.layout.chat_widget);
            views.setTextViewText(R.id.titlew, widgetData.getString("titlew"));
            views.setTextViewText(R.id.description, widgetData.getString("description"));
            views.setTextViewText(R.id.value, widgetData.getString("value"));
            

        }catch(JSONException e){
            e.printStackTrace();
        }

        // CharSequence widgetText = context.getString(R.string.appwidget_text);
        // // Construct the RemoteViews object
        // RemoteViews views = new RemoteViews(context.getPackageName(), R.layout.chat_widget);
        // views.setTextViewText(R.id.appwidget_text, widgetText);

        // // Instruct the widget manager to update the widget
        // appWidgetManager.updateAppWidget(appWidgetId, views);
    }

    @Override
    public void onUpdate(Context context, AppWidgetManager appWidgetManager, int[] appWidgetIds) {
        // There may be multiple widgets active, so update all of them
        for (int appWidgetId : appWidgetIds) {
            updateAppWidget(context, appWidgetManager, appWidgetId);
        }
    }

    @Override
    public void onEnabled(Context context) {
        // Enter relevant functionality for when the first widget is created
    }

    @Override
    public void onDisabled(Context context) {
        // Enter relevant functionality for when the last widget is disabled
    }
}